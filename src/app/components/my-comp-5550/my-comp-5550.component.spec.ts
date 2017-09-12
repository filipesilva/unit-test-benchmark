import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5550Component } from './my-comp-5550.component';

describe('MyComp5550Component', () => {
  let component: MyComp5550Component;
  let fixture: ComponentFixture<MyComp5550Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5550Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5550Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
