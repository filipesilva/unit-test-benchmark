import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5894Component } from './my-comp-5894.component';

describe('MyComp5894Component', () => {
  let component: MyComp5894Component;
  let fixture: ComponentFixture<MyComp5894Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5894Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5894Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
