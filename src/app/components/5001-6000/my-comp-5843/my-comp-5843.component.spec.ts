import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5843Component } from './my-comp-5843.component';

describe('MyComp5843Component', () => {
  let component: MyComp5843Component;
  let fixture: ComponentFixture<MyComp5843Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5843Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5843Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
