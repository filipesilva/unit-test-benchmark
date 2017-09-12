import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7006Component } from './my-comp-7006.component';

describe('MyComp7006Component', () => {
  let component: MyComp7006Component;
  let fixture: ComponentFixture<MyComp7006Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7006Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
