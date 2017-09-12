import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5750Component } from './my-comp-5750.component';

describe('MyComp5750Component', () => {
  let component: MyComp5750Component;
  let fixture: ComponentFixture<MyComp5750Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5750Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5750Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
