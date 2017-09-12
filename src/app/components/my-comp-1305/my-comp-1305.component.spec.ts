import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1305Component } from './my-comp-1305.component';

describe('MyComp1305Component', () => {
  let component: MyComp1305Component;
  let fixture: ComponentFixture<MyComp1305Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1305Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1305Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
