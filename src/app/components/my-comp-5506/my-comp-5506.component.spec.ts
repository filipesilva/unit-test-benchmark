import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5506Component } from './my-comp-5506.component';

describe('MyComp5506Component', () => {
  let component: MyComp5506Component;
  let fixture: ComponentFixture<MyComp5506Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5506Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5506Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
