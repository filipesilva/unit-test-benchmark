import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5869Component } from './my-comp-5869.component';

describe('MyComp5869Component', () => {
  let component: MyComp5869Component;
  let fixture: ComponentFixture<MyComp5869Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5869Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5869Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
