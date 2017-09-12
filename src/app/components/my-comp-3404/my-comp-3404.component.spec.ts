import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3404Component } from './my-comp-3404.component';

describe('MyComp3404Component', () => {
  let component: MyComp3404Component;
  let fixture: ComponentFixture<MyComp3404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
