import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6869Component } from './my-comp-6869.component';

describe('MyComp6869Component', () => {
  let component: MyComp6869Component;
  let fixture: ComponentFixture<MyComp6869Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6869Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6869Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
