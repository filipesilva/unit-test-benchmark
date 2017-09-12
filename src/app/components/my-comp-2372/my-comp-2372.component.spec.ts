import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2372Component } from './my-comp-2372.component';

describe('MyComp2372Component', () => {
  let component: MyComp2372Component;
  let fixture: ComponentFixture<MyComp2372Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2372Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2372Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
