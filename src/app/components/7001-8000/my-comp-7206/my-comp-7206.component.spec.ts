import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7206Component } from './my-comp-7206.component';

describe('MyComp7206Component', () => {
  let component: MyComp7206Component;
  let fixture: ComponentFixture<MyComp7206Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7206Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7206Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
