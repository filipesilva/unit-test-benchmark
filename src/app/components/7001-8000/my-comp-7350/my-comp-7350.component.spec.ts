import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7350Component } from './my-comp-7350.component';

describe('MyComp7350Component', () => {
  let component: MyComp7350Component;
  let fixture: ComponentFixture<MyComp7350Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7350Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7350Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
