import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5849Component } from './my-comp-5849.component';

describe('MyComp5849Component', () => {
  let component: MyComp5849Component;
  let fixture: ComponentFixture<MyComp5849Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5849Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5849Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
