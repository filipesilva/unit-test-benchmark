import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5398Component } from './my-comp-5398.component';

describe('MyComp5398Component', () => {
  let component: MyComp5398Component;
  let fixture: ComponentFixture<MyComp5398Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5398Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5398Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
