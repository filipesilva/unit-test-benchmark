import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5592Component } from './my-comp-5592.component';

describe('MyComp5592Component', () => {
  let component: MyComp5592Component;
  let fixture: ComponentFixture<MyComp5592Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5592Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5592Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
