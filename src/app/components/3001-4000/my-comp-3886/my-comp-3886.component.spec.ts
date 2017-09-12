import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3886Component } from './my-comp-3886.component';

describe('MyComp3886Component', () => {
  let component: MyComp3886Component;
  let fixture: ComponentFixture<MyComp3886Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3886Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3886Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
