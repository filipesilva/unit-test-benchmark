import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4403Component } from './my-comp-4403.component';

describe('MyComp4403Component', () => {
  let component: MyComp4403Component;
  let fixture: ComponentFixture<MyComp4403Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4403Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
