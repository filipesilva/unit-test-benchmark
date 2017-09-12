import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5190Component } from './my-comp-5190.component';

describe('MyComp5190Component', () => {
  let component: MyComp5190Component;
  let fixture: ComponentFixture<MyComp5190Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5190Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
