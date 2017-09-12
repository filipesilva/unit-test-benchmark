import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1138Component } from './my-comp-1138.component';

describe('MyComp1138Component', () => {
  let component: MyComp1138Component;
  let fixture: ComponentFixture<MyComp1138Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1138Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1138Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
