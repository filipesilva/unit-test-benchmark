import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1162Component } from './my-comp-1162.component';

describe('MyComp1162Component', () => {
  let component: MyComp1162Component;
  let fixture: ComponentFixture<MyComp1162Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1162Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1162Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
