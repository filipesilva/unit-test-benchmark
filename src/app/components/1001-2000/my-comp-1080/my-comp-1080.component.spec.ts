import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1080Component } from './my-comp-1080.component';

describe('MyComp1080Component', () => {
  let component: MyComp1080Component;
  let fixture: ComponentFixture<MyComp1080Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1080Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1080Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
