import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2342Component } from './my-comp-2342.component';

describe('MyComp2342Component', () => {
  let component: MyComp2342Component;
  let fixture: ComponentFixture<MyComp2342Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2342Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2342Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
