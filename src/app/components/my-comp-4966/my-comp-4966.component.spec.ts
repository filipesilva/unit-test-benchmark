import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4966Component } from './my-comp-4966.component';

describe('MyComp4966Component', () => {
  let component: MyComp4966Component;
  let fixture: ComponentFixture<MyComp4966Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4966Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4966Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
