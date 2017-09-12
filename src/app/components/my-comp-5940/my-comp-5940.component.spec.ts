import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5940Component } from './my-comp-5940.component';

describe('MyComp5940Component', () => {
  let component: MyComp5940Component;
  let fixture: ComponentFixture<MyComp5940Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5940Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5940Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
