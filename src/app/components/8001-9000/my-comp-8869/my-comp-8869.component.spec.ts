import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8869Component } from './my-comp-8869.component';

describe('MyComp8869Component', () => {
  let component: MyComp8869Component;
  let fixture: ComponentFixture<MyComp8869Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8869Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8869Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
