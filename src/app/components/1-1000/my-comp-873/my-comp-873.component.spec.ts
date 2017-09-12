import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp873Component } from './my-comp-873.component';

describe('MyComp873Component', () => {
  let component: MyComp873Component;
  let fixture: ComponentFixture<MyComp873Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp873Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp873Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
