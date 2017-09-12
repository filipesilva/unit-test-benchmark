import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5329Component } from './my-comp-5329.component';

describe('MyComp5329Component', () => {
  let component: MyComp5329Component;
  let fixture: ComponentFixture<MyComp5329Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5329Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5329Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
