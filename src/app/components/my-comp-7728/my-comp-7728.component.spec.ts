import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7728Component } from './my-comp-7728.component';

describe('MyComp7728Component', () => {
  let component: MyComp7728Component;
  let fixture: ComponentFixture<MyComp7728Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7728Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7728Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
