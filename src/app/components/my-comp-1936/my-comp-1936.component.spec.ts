import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1936Component } from './my-comp-1936.component';

describe('MyComp1936Component', () => {
  let component: MyComp1936Component;
  let fixture: ComponentFixture<MyComp1936Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1936Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1936Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
