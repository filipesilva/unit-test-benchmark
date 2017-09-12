import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5024Component } from './my-comp-5024.component';

describe('MyComp5024Component', () => {
  let component: MyComp5024Component;
  let fixture: ComponentFixture<MyComp5024Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5024Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
