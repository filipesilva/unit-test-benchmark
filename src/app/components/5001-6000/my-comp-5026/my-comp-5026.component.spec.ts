import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5026Component } from './my-comp-5026.component';

describe('MyComp5026Component', () => {
  let component: MyComp5026Component;
  let fixture: ComponentFixture<MyComp5026Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5026Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5026Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
