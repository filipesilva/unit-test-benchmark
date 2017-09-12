import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4037Component } from './my-comp-4037.component';

describe('MyComp4037Component', () => {
  let component: MyComp4037Component;
  let fixture: ComponentFixture<MyComp4037Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4037Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4037Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
