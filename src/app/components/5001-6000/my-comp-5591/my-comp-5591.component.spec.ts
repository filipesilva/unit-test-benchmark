import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5591Component } from './my-comp-5591.component';

describe('MyComp5591Component', () => {
  let component: MyComp5591Component;
  let fixture: ComponentFixture<MyComp5591Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5591Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5591Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
