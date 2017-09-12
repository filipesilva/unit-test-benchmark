import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2048Component } from './my-comp-2048.component';

describe('MyComp2048Component', () => {
  let component: MyComp2048Component;
  let fixture: ComponentFixture<MyComp2048Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2048Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2048Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
