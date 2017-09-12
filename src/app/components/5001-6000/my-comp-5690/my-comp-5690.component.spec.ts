import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5690Component } from './my-comp-5690.component';

describe('MyComp5690Component', () => {
  let component: MyComp5690Component;
  let fixture: ComponentFixture<MyComp5690Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5690Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5690Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
