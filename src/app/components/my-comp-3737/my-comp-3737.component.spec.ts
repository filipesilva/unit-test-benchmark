import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3737Component } from './my-comp-3737.component';

describe('MyComp3737Component', () => {
  let component: MyComp3737Component;
  let fixture: ComponentFixture<MyComp3737Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3737Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3737Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
