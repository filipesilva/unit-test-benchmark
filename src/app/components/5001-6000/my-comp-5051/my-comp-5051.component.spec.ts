import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5051Component } from './my-comp-5051.component';

describe('MyComp5051Component', () => {
  let component: MyComp5051Component;
  let fixture: ComponentFixture<MyComp5051Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5051Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5051Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
