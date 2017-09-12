import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7535Component } from './my-comp-7535.component';

describe('MyComp7535Component', () => {
  let component: MyComp7535Component;
  let fixture: ComponentFixture<MyComp7535Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7535Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7535Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
