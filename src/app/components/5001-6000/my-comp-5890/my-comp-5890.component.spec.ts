import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5890Component } from './my-comp-5890.component';

describe('MyComp5890Component', () => {
  let component: MyComp5890Component;
  let fixture: ComponentFixture<MyComp5890Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5890Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5890Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
