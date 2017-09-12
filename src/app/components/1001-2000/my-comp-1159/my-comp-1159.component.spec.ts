import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1159Component } from './my-comp-1159.component';

describe('MyComp1159Component', () => {
  let component: MyComp1159Component;
  let fixture: ComponentFixture<MyComp1159Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1159Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1159Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
