import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1869Component } from './my-comp-1869.component';

describe('MyComp1869Component', () => {
  let component: MyComp1869Component;
  let fixture: ComponentFixture<MyComp1869Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1869Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1869Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
