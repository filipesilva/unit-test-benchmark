import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5079Component } from './my-comp-5079.component';

describe('MyComp5079Component', () => {
  let component: MyComp5079Component;
  let fixture: ComponentFixture<MyComp5079Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5079Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5079Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
