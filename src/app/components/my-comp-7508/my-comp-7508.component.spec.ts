import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7508Component } from './my-comp-7508.component';

describe('MyComp7508Component', () => {
  let component: MyComp7508Component;
  let fixture: ComponentFixture<MyComp7508Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7508Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7508Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
