import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3860Component } from './my-comp-3860.component';

describe('MyComp3860Component', () => {
  let component: MyComp3860Component;
  let fixture: ComponentFixture<MyComp3860Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3860Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3860Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
