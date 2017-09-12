import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5475Component } from './my-comp-5475.component';

describe('MyComp5475Component', () => {
  let component: MyComp5475Component;
  let fixture: ComponentFixture<MyComp5475Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5475Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5475Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
