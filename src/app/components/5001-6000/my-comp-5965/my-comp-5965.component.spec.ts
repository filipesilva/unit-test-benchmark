import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5965Component } from './my-comp-5965.component';

describe('MyComp5965Component', () => {
  let component: MyComp5965Component;
  let fixture: ComponentFixture<MyComp5965Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5965Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5965Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
