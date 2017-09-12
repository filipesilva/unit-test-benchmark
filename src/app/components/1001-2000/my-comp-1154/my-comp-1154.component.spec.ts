import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1154Component } from './my-comp-1154.component';

describe('MyComp1154Component', () => {
  let component: MyComp1154Component;
  let fixture: ComponentFixture<MyComp1154Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1154Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1154Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
