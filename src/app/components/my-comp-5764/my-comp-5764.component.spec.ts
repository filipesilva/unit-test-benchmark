import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5764Component } from './my-comp-5764.component';

describe('MyComp5764Component', () => {
  let component: MyComp5764Component;
  let fixture: ComponentFixture<MyComp5764Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5764Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5764Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
