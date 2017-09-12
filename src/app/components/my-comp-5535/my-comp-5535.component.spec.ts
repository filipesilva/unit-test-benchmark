import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5535Component } from './my-comp-5535.component';

describe('MyComp5535Component', () => {
  let component: MyComp5535Component;
  let fixture: ComponentFixture<MyComp5535Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5535Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5535Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
