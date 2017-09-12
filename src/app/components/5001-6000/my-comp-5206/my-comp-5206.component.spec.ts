import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5206Component } from './my-comp-5206.component';

describe('MyComp5206Component', () => {
  let component: MyComp5206Component;
  let fixture: ComponentFixture<MyComp5206Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5206Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5206Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
