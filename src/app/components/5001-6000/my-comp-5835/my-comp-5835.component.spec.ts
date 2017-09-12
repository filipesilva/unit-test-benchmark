import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5835Component } from './my-comp-5835.component';

describe('MyComp5835Component', () => {
  let component: MyComp5835Component;
  let fixture: ComponentFixture<MyComp5835Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5835Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5835Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
