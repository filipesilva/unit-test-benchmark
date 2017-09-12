import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5982Component } from './my-comp-5982.component';

describe('MyComp5982Component', () => {
  let component: MyComp5982Component;
  let fixture: ComponentFixture<MyComp5982Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5982Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5982Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
