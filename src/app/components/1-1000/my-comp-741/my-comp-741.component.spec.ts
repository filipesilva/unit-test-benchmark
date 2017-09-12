import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp741Component } from './my-comp-741.component';

describe('MyComp741Component', () => {
  let component: MyComp741Component;
  let fixture: ComponentFixture<MyComp741Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp741Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp741Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
